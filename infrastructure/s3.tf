#############################
# Root S3 bucket resources
#############################

# S3 bucket to host static website assets (html, css, js)
resource "aws_s3_bucket" "root_s3_bucket" {
  bucket        = "${var.subdomain_name}.${var.domain_name}"
  force_destroy = true
}

# Access Control List for root_S3_bucket
# Set to private to allow access only through Cloudfront
resource "aws_s3_bucket_acl" "root_s3_acl" {
  bucket = aws_s3_bucket.root_s3_bucket.id
  acl    = "private"
}

# S3 bucket policy
resource "aws_s3_bucket_policy" "root_bucket_policy" {
  bucket = aws_s3_bucket.root_s3_bucket.id
  policy = data.aws_iam_policy_document.root_bucket_policy.json
}

# Policy document for root_bucket_policy to allow only private access through Cloudfront
data "aws_iam_policy_document" "root_bucket_policy" {
  statement {
    sid = "AllowCloudFrontServicePrincipal"

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = ["s3:GetObject"]

    resources = [
      aws_s3_bucket.root_s3_bucket.arn,
      "${aws_s3_bucket.root_s3_bucket.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.root_s3_distribution.arn]
    }
  }
}

# CORS configuration to allow requests from domain
resource "aws_s3_bucket_cors_configuration" "root_bucket_cors" {
  bucket = aws_s3_bucket.root_s3_bucket.id

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["https://${aws_s3_bucket.root_s3_bucket.id}"]
    max_age_seconds = 3000
  }
}

# Website config for root_s3_bucket
resource "aws_s3_bucket_website_configuration" "root_bucket_website_config" {
  bucket = aws_s3_bucket.root_s3_bucket.id
  index_document { suffix = "index.html" }
  error_document { key = "index.html" }
}

#############################
# www S3 bucket resources
#############################

# S3 bucket to redirect www requests to non-www.
resource "aws_s3_bucket" "www_s3_bucket" {
  bucket        = "www.${var.subdomain_name}.${var.domain_name}"
  force_destroy = true
}

# Access Control List for www_S3_bucket
# Set to private to allow access only through Cloudfront
resource "aws_s3_bucket_acl" "www_s3_acl" {
  bucket = aws_s3_bucket.www_s3_bucket.id
  acl    = "public-read"
}

# S3 bucket policy
resource "aws_s3_bucket_policy" "www_bucket_policy" {
  bucket = aws_s3_bucket.www_s3_bucket.id
  policy = data.aws_iam_policy_document.www_bucket_policy.json
}

# Policy document for www_bucket_policy
data "aws_iam_policy_document" "www_bucket_policy" {
  statement {
    sid = "PublicReadGetObject"

    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = ["s3:GetObject"]

    resources = [
      aws_s3_bucket.www_s3_bucket.arn,
      "${aws_s3_bucket.www_s3_bucket.arn}/*",
    ]
  }
}

# Website config for www_s3_bucket
resource "aws_s3_bucket_website_configuration" "www_bucket_website_config" {
  bucket = aws_s3_bucket.www_s3_bucket.id
  redirect_all_requests_to {
    host_name = "${var.subdomain_name}.${var.domain_name}"
    protocol = "http"
  }
}
