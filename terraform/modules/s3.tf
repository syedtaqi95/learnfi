# S3 bucket to host static assets
resource "aws_s3_bucket" "www" {
  bucket        = var.domain_name
  force_destroy = true

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST", "PUT", "DELETE"]
    allowed_origins = ["https://www.${var.domain_name}"]
    max_age_seconds = 3000
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    project = var.project_name
  }
}
