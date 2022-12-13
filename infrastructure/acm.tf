# SSL Certificate
resource "aws_acm_certificate" "ssl_certificate" {
  provider                  = aws.acm_provider
  domain_name               = "${var.subdomain_name}.${var.domain_name}"
  subject_alternative_names = ["*.${var.subdomain_name}.${var.domain_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# Note: navigate to the ACM Console using a web browser to create the Route 53 records
# in order to complete the certificate validation
# See: https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html
resource "aws_acm_certificate_validation" "cert_validation" {
  provider        = aws.acm_provider
  certificate_arn = aws_acm_certificate.ssl_certificate.arn
}
