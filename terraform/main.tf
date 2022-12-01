terraform {
  cloud {
    organization = "syed-taqi-haider"
    workspaces {
      name = "portfolio-dashboard-prod-eu-west-2"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "eu-west-2"
}

# Creates S3 bucket to host static assets
# and configures a Cloudfront CDN distribution
module "cdn" {
  source = "cloudposse/cloudfront-s3-cdn/aws"
  # Cloud Posse recommends pinning every module to a specific version
  # version = "x.x.x"

  namespace         = "eg"
  stage             = "prod"
  name              = var.project_name
  aliases           = [var.domain_name]
  dns_alias_enabled = true
  parent_zone_name  = "syedtaqihaider.co.uk"

  deployment_principal_arns = {
    (var.admin_iam_arn) = [""]
  }
}
