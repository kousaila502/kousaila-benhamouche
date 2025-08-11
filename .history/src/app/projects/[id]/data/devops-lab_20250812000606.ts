// src/app/projects/data/devops-lab.ts

export const devopsLabProject = {
    id: 'devops-lab',
    title: "DevOps Infrastructure Lab",
    subtitle: "Cloud Infrastructure Automation & Cost Optimization Research",
    description: "Advanced DevOps project demonstrating infrastructure automation, comprehensive monitoring setup, and deployment optimization. Achieved 80% infrastructure cost reduction ($383→$78/month) through intelligent resource management and automated scaling strategies.",
    focus: "DevOps Engineering, Infrastructure Automation, Cost Optimization, Monitoring & Observability",
    technologies: ["Kubernetes", "Docker", "Terraform", "Prometheus", "Grafana", "Helm", "Jenkins", "AWS", "GCP", "Ansible"],
    liveUrl: null, // Infrastructure project - no traditional live URL
    githubUrl: "https://github.com/kousaila502/devops-infrastructure-lab",
    apiDocsUrl: null,
    featured: false,
    category: "devops",
    images: {
        main: "/projects/devops-lab.png",
        gallery: [
            {
                src: "/projects/devops-lab.png",
                alt: "DevOps Infrastructure Architecture",
                caption: "Complete cloud-native infrastructure with monitoring and automation"
            }
        ]
    },
    metrics: {
        costReduction: "80%",
        monthlyBefore: "$383",
        monthlyAfter: "$78",
        annualSavings: "$3,660",
        uptime: "99.9%",
        automation: "95%"
    },
    costOptimization: {
        before: {
            total: 383,
            compute: 280,
            storage: 45,
            networking: 35,
            monitoring: 23
        },
        after: {
            total: 78,
            compute: 45,
            storage: 12,
            networking: 15,
            monitoring: 6
        },
        optimizations: [
            "Right-sized instances based on actual usage patterns",
            "Implemented auto-scaling with predictive scaling policies",
            "Optimized storage with lifecycle management and compression",
            "Consolidated monitoring stack with open-source solutions",
            "Implemented spot instances for non-critical workloads",
            "Automated resource cleanup and garbage collection",
            "Network optimization with CDN and edge caching",
            "Reserved instance planning for predictable workloads"
        ]
    },
    infrastructureComponents: {
        kubernetes: {
            title: "☸️ Kubernetes Orchestration",
            features: [
                "Multi-cluster setup with dev, staging, and production environments",
                "Horizontal Pod Autoscaler (HPA) with custom metrics",
                "Vertical Pod Autoscaler (VPA) for resource optimization",
                "Cluster Autoscaler for node-level scaling",
                "RBAC implementation with service accounts and policies"
            ]
        },
        monitoring: {
            title: "📊 Monitoring & Observability",
            features: [
                "Prometheus for metrics collection and alerting",
                "Grafana dashboards with custom visualizations",
                "ELK Stack (Elasticsearch, Logstash, Kibana) for log management",
                "Jaeger for distributed tracing and performance monitoring",
                "AlertManager for intelligent alert routing and escalation"
            ]
        },
        cicd: {
            title: "🔄 CI/CD Pipeline Automation",
            features: [
                "Jenkins with pipeline-as-code using Jenkinsfile",
                "GitOps workflow with ArgoCD for declarative deployments",
                "Automated testing with unit, integration, and security scans",
                "Container registry with vulnerability scanning",
                "Blue-green and canary deployment strategies"
            ]
        },
        infrastructure: {
            title: "🏗️ Infrastructure as Code",
            features: [
                "Terraform for multi-cloud infrastructure provisioning",
                "Ansible for configuration management and automation",
                "Helm charts for Kubernetes application packaging",
                "Version-controlled infrastructure with Git workflows",
                "Environment-specific configurations and secrets management"
            ]
        },
        security: {
            title: "🔒 Security & Compliance",
            features: [
                "Network policies and microsegmentation",
                "Pod Security Standards and admission controllers",
                "Secrets management with HashiCorp Vault",
                "Container image scanning and compliance checks",
                "Backup and disaster recovery automation"
            ]
        }
    },
    details: {
        challenge: "Optimizing deployment infrastructure costs while maintaining high availability, implementing comprehensive monitoring for complex distributed systems, and establishing automated workflows that reduce manual intervention and operational overhead.",
        solution: "Built a cloud-native infrastructure using Kubernetes orchestration, implemented intelligent auto-scaling with Prometheus monitoring, established Infrastructure as Code practices with Terraform, and created comprehensive CI/CD pipelines achieving 80% cost reduction while improving system reliability.",
        architecture: `DevOps Infrastructure Lab Architecture:

🌥️ MULTI-CLOUD INFRASTRUCTURE
    ├── AWS (Primary Production Environment)
    ├── Google Cloud Platform (Development & Testing)
    └── Local Development (Minikube/Kind)
                    ↓
☸️ KUBERNETES ORCHESTRATION LAYER
    ├── Production Cluster (AWS EKS)
    │   ├── Auto-scaling groups with spot instances
    │   ├── Load balancers with health checks
    │   └── Persistent storage with EBS CSI
    ├── Staging Cluster (GCP GKE)
    │   ├── Cost-optimized preemptible instances
    │   └── Shared development resources
    └── Development Environment
        ├── Local Kubernetes with Minikube
        └── Docker Compose for rapid prototyping
                    ↓
🔄 CI/CD PIPELINE AUTOMATION
    ├── Source Control (GitHub with branch protection)
    ├── Jenkins Pipeline
    │   ├── Automated testing and quality gates
    │   ├── Container image building and scanning
    │   ├── Security vulnerability assessment
    │   └── Automated deployment triggers
    ├── ArgoCD GitOps
    │   ├── Declarative application deployment
    │   ├── Automatic synchronization from Git
    │   └── Rollback and disaster recovery
    └── Container Registry
        ├── Image vulnerability scanning
        └── Lifecycle management policies
                    ↓
📊 MONITORING & OBSERVABILITY STACK
    ├── Metrics Collection (Prometheus)
    │   ├── Node metrics and resource utilization
    │   ├── Application performance metrics
    │   ├── Custom business metrics
    │   └── Cost tracking and optimization alerts
    ├── Visualization (Grafana)
    │   ├── Infrastructure dashboards
    │   ├── Application performance monitoring
    │   ├── Cost analysis and trending
    │   └── SLA and SLO tracking
    ├── Logging (ELK Stack)
    │   ├── Centralized log aggregation
    │   ├── Log parsing and enrichment
    │   ├── Search and analysis capabilities
    │   └── Log retention and archival
    └── Distributed Tracing (Jaeger)
        ├── Request flow visualization
        ├── Performance bottleneck identification
        └── Service dependency mapping
                    ↓
🏗️ INFRASTRUCTURE AS CODE
    ├── Terraform Modules
    │   ├── Network infrastructure and VPCs
    │   ├── Kubernetes cluster provisioning
    │   ├── Database and storage configuration
    │   └── Security groups and IAM policies
    ├── Ansible Playbooks
    │   ├── Server configuration and hardening
    │   ├── Application deployment automation
    │   └── Backup and maintenance procedures
    └── Helm Charts
        ├── Application packaging and templating
        ├── Environment-specific configurations
        └── Dependency management`,
        achievements: [
            "💰 Achieved 80% infrastructure cost reduction: $383 → $78/month ($3,660 annual savings)",
            "📈 Implemented comprehensive monitoring with Prometheus and Grafana dashboards",
            "🤖 95% automation of deployment and operational procedures",
            "🔬 Master's thesis research with quantifiable cost optimization results",
            "☸️ Production-grade Kubernetes clusters with auto-scaling and self-healing",
            "🔄 GitOps implementation with ArgoCD for declarative infrastructure management",
            "📊 Real-time cost tracking and optimization recommendations",
            "🛡️ Enterprise security implementation with network policies and secrets management",
            "📈 99.9% uptime achievement through redundancy and automated failover",
            "🔍 Distributed tracing and observability for complex microservices",
            "🚀 Blue-green and canary deployment strategies for zero-downtime releases",
            "📚 Complete Infrastructure as Code with version control and peer review"
        ]
    },
    researchContributions: {
        academic: {
            title: "🎓 Academic Research Contributions",
            contributions: [
                "Cost optimization algorithms for cloud resource allocation",
                "Predictive auto-scaling based on application metrics and usage patterns",
                "Multi-cloud deployment strategies with cost-benefit analysis",
                "DevOps maturity assessment framework for enterprise adoption",
                "Quantitative analysis of Infrastructure as Code impact on operational efficiency"
            ]
        },
        industry: {
            title: "🏢 Industry Applications",
            applications: [
                "Enterprise DevOps transformation roadmaps",
                "Cloud migration strategies with cost optimization",
                "Kubernetes adoption patterns for legacy application modernization",
                "Monitoring and observability best practices for microservices",
                "Automated compliance and security scanning integration"
            ]
        }
    },
    technicalFeatures: {
        automation: {
            title: "🤖 Infrastructure Automation",
            features: [
                "Terraform for infrastructure provisioning and management",
                "Ansible for configuration management and application deployment",
                "Kubernetes operators for application lifecycle management",
                "Automated backup and disaster recovery procedures",
                "Self-healing infrastructure with automated remediation"
            ]
        },
        monitoring: {
            title: "📊 Advanced Monitoring Stack",
            features: [
                "Prometheus with custom metrics and alerting rules",
                "Grafana dashboards with real-time visualization",
                "ELK Stack for centralized logging and analysis",
                "Jaeger for distributed tracing and performance monitoring",
                "Cost tracking and optimization recommendations"
            ]
        },
        scaling: {
            title: "📈 Intelligent Scaling Strategies",
            features: [
                "Horizontal Pod Autoscaler with custom metrics",
                "Vertical Pod Autoscaler for resource optimization",
                "Cluster Autoscaler for node-level scaling",
                "Predictive scaling based on historical patterns",
                "Spot instance integration for cost optimization"
            ]
        },
        security: {
            title: "🔒 Security & Compliance",
            features: [
                "Network policies and microsegmentation",
                "Pod Security Standards and admission controllers",
                "Secrets management with external secret operators",
                "Container image vulnerability scanning",
                "Compliance monitoring and reporting automation"
            ]
        }
    },
    codeExamples: {
        terraform: `# Terraform Infrastructure Module
resource "aws_eks_cluster" "main" {
  name     = var.cluster_name
  role_arn = aws_iam_role.cluster.arn
  version  = var.kubernetes_version

  vpc_config {
    subnet_ids              = var.subnet_ids
    endpoint_private_access = true
    endpoint_public_access  = true
    public_access_cidrs     = var.public_access_cidrs
  }

  enabled_cluster_log_types = ["api", "audit", "authenticator", "controllerManager", "scheduler"]

  depends_on = [
    aws_iam_role_policy_attachment.cluster_AmazonEKSClusterPolicy,
  ]

  tags = merge(var.tags, {
    "kubernetes.io/cluster/\${var.cluster_name}" = "owned"
  })
}

resource "aws_eks_node_group" "main" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "\${var.cluster_name}-workers"
  node_role_arn   = aws_iam_role.node.arn
  subnet_ids      = var.private_subnet_ids

  capacity_type  = "SPOT"
  instance_types = var.instance_types

  scaling_config {
    desired_size = var.desired_capacity
    max_size     = var.max_capacity
    min_size     = var.min_capacity
  }

  update_config {
    max_unavailable_percentage = 25
  }
}`,
        kubernetes: `# Kubernetes HPA with Custom Metrics
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: webapp-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: webapp
  minReplicas: 2
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: "100"
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60`,
        monitoring: `# Prometheus Monitoring Configuration
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "cost_optimization_rules.yml"
  - "performance_rules.yml"
  - "availability_rules.yml"

scrape_configs:
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)

  - job_name: 'cost-exporter'
    static_configs:
      - targets: ['cost-exporter:8080']
    scrape_interval: 300s
    metrics_path: /metrics

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

# Cost Optimization Alert Rules
groups:
  - name: cost.rules
    rules:
      - alert: HighCostInstance
        expr: aws_ec2_instance_cost_per_hour > 0.5
        for: 1h
        labels:
          severity: warning
        annotations:
          summary: "High cost instance detected"
          description: "Instance {{ $labels.instance }} costs {{ $value }} per hour"
      
      - alert: UnderutilizedResource
        expr: (cpu_usage_percent < 20) and (memory_usage_percent < 30)
        for: 2h
        labels:
          severity: info
        annotations:
          summary: "Underutilized resource detected"
          description: "Resource {{ $labels.resource }} is underutilized"`
    },
    costOptimizationStrategies: [
        {
            strategy: "Right-sizing instances",
            description: "Analyze usage patterns and select optimal instance types",
            savings: "40%"
        },
        {
            strategy: "Spot instance integration",
            description: "Use spot instances for non-critical and batch workloads",
            savings: "60-70%"
        },
        {
            strategy: "Auto-scaling optimization",
            description: "Implement predictive scaling based on historical data",
            savings: "25%"
        },
        {
            strategy: "Storage lifecycle management",
            description: "Automated data tiering and compression strategies",
            savings: "50%"
        },
        {
            strategy: "Reserved instance planning",
            description: "Strategic reservation planning for predictable workloads",
            savings: "30-50%"
        }
    ],
    monitoringDashboards: [
        {
            name: "Infrastructure Overview",
            description: "High-level infrastructure health and performance metrics",
            panels: ["CPU/Memory utilization", "Network traffic", "Storage usage", "Cost trends"]
        },
        {
            name: "Cost Optimization",
            description: "Cost tracking and optimization recommendations",
            panels: ["Daily/Monthly costs", "Resource utilization", "Savings opportunities", "Budget alerts"]
        },
        {
            name: "Application Performance",
            description: "Application-specific metrics and SLA tracking",
            panels: ["Response times", "Error rates", "Throughput", "Dependency health"]
        },
        {
            name: "Security Compliance",
            description: "Security posture and compliance monitoring",
            panels: ["Vulnerability scans", "Policy violations", "Access patterns", "Audit logs"]
        }
    ],
    toolsAndTechnologies: [
        {
            category: "Container Orchestration",
            tools: ["Kubernetes", "Docker", "Helm"],
            purpose: "Application deployment and scaling"
        },
        {
            category: "Infrastructure as Code",
            tools: ["Terraform", "Ansible", "CloudFormation"],
            purpose: "Infrastructure provisioning and configuration"
        },
        {
            category: "Monitoring & Observability",
            tools: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
            purpose: "System monitoring and troubleshooting"
        },
        {
            category: "CI/CD",
            tools: ["Jenkins", "ArgoCD", "GitLab CI", "GitHub Actions"],
            purpose: "Automated testing and deployment"
        },
        {
            category: "Cloud Platforms",
            tools: ["AWS", "Google Cloud", "Azure"],
            purpose: "Infrastructure hosting and managed services"
        }
    ],
    futureEnhancements: [
        "Machine learning-based predictive scaling and cost optimization",
        "Multi-cloud cost comparison and intelligent workload placement",
        "Automated security compliance scanning and remediation",
        "Advanced chaos engineering for resilience testing",
        "Integration with FinOps practices for cost governance",
        "Service mesh implementation for advanced traffic management",
        "Serverless computing integration for event-driven workloads",
        "Advanced observability with distributed tracing and APM"
    ]
};

export default devopsLabProject;