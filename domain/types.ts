// Domain Types - Core Business Logic (DIP: Dependency Inversion Principle)

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface TechStack {
  name: string;
  category: string;
  logo?: string;
}

export interface Metric {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
}

export interface CTAConfig {
  text: string;
  action: string;
  variant?: "primary" | "secondary";
}
