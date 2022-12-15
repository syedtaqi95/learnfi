# SSL Certificate for root website (non-www)
resource "aws_acm_certificate" "ssl_certificate" {
  provider          = aws.acm_provider
  domain_name       = var.domain_name
  validation_method = "DNS"

  subject_alternative_names = [
    "*.${var.domain_name}",
    "${var.subdomain_name}.${var.domain_name}",
    "*.${var.subdomain_name}.${var.domain_name}"
  ]

  lifecycle {
    create_before_destroy = true
  }
}

# Uncomment to validate the TLS/SSL certificate
# See: https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html
resource "aws_acm_certificate_validation" "cert_validation" {
  provider                = aws.acm_provider
  certificate_arn         = aws_acm_certificate.ssl_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
