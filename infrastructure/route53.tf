resource "aws_route53_zone" "root-zone" {
  comment = "Portfolio Dashboard web app"
  name    = "portfolio-dashboard.syedtaqihaider.co.uk"
}

resource "aws_route53_record" "root-a" {
  zone_id = aws_route53_zone.root-zone.id
  name    = "${var.subdomain_name}.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
