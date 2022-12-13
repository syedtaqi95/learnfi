resource "aws_cloudfront_distribution" "root_s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.root_s3_bucket.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.root_s3_bucket.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["${var.subdomain_name}.${var.domain_name}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "POST"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.subdomain_name}.${var.domain_name}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert_validation.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }

  comment = "Cloudfront distribution for ${var.subdomain_name}.${var.domain_name}"

}

// Origin access control for Cloudfront
resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "default"
  description                       = "Origin access control for Cloudfront"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
