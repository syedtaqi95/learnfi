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

resource "aws_instance" "app_server" {
  ami           = "ami-05bfd03d0709e3ecb"
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
