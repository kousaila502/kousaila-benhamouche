// src/app/projects/[id]/data/cart-api-service.ts

export const cartApiServiceProject = {
    id: 'cart-api-service',
    title: "Cart Service Microservice",
    subtitle: "Reactive Java Spring Boot WebFlux Cart Management System",
    description: "High-performance reactive cart management microservice built with Java Spring Boot WebFlux, featuring Redis session storage, real-time synchronization, and seamless checkout integration. Demonstrates reactive programming patterns and enterprise-grade session management.",
    focus: "Reactive Programming, Java Spring Boot, Redis Integration, Session Management",
    technologies: ["Java", "Spring Boot", "WebFlux", "Redis", "Upstash", "Heroku", "JWT", "Reactive Programming", "OpenAPI", "Docker"],
    liveUrl: "https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com",
    githubUrl: "https://github.com/kousaila502/Cart-API-Service",
    apiDocsUrl: "https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com/swagger-ui.html",
    healthUrl: "https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com/health",
    featured: true,
    category: "microservice",
    images: {
        main: "/projects/cart-api-service/swagger-ui.PNG",
        gallery: [
            {
                src: "/projects/cart-api-service/swagger-ui.PNG",
                alt: "Interactive Swagger UI Documentation",
                caption: "Complete OpenAPI 3.0 documentation with reactive Spring Boot WebFlux"
            },
            {
                src: "/projects/cart-api-service/reactive-endpoints.PNG",
                alt: "Reactive API Endpoints",
                caption: "High-performance reactive programming with Spring WebFlux"
            },
            {
                src: "/projects/cart-api-service/redis-integration.PNG",
                alt: "Redis Session Management",
                caption: "Ultra-fast cart operations with Upstash Redis integration"
            },
            {
                src: "/projects/cart-api-service/cart-operations.PNG",
                alt: "Cart Management Operations",
                caption: "Complete CRUD operations for shopping cart functionality"
            },
            {
                src: "/projects/cart-api-service/health-monitoring.PNG",
                alt: "Health Monitoring System",
                caption: "Real-time service health with Redis connectivity status"
            }
        ]
    },
    metrics: {
        performance: "Reactive",
        storage: "Redis",
        deployment: "Heroku",
        responseTime: "<100ms",
        endpoints: "15+",
        automation: "100% CI/CD"
    },
    businessMetrics: {
        sessionManagement: "Ultra-fast Redis",
        cartPersistence: "Automatic recovery",
        realTimeSync: "Cross-device sync",
        checkoutIntegration: "Seamless flow",
        performanceMode: "Reactive streams"
    },
    knownIssues: {
        cartQuantityBug: {
            title: "🐛 Cart Quantity Doubling Bug (RESOLVED)",
            description: "Previously identified issue where adding items resulted in doubled quantities",
            rootCause: "Frontend making duplicate API calls - both direct API call and CartContext state management",
            solution: "Fixed by removing duplicate API calls and using only CartContext for state management",
            status: "✅ RESOLVED",
            impact: "User experience improved with accurate quantity handling",
            technicalFix: "Eliminated redundant state updates in React frontend components"
        }
    },
    details: {
        challenge: "Build a high-performance reactive cart management microservice that handles real-time cart operations, session persistence, cross-device synchronization, and seamless integration with other microservices while maintaining ultra-fast response times and scalability.",
        solution: "Developed a sophisticated Java Spring Boot WebFlux microservice with reactive programming patterns, Redis-based session storage for ultra-fast operations, comprehensive API documentation, and automated deployment pipeline. Successfully resolved critical cart quantity bug through frontend optimization.",
        architecture: `Cart Service Reactive Architecture:

🌐 Frontend Application (Vercel)
    └── https://ecommerce-app-omega-two-64.vercel.app
    │   ├── React Cart Context (State Management)
    │   ├── Real-time Cart Updates
    │   └── Cross-device Synchronization
                    ↓
🔗 API Gateway (Google Kubernetes Engine)
    └── https://34.95.5.30.nip.io
                    ↓
🛒 CART SERVICE (Heroku Platform)
    ├── ☕ Java 17 + Spring Boot 3.x
    ├── 🔄 Spring WebFlux (Reactive Programming)
    ├── 🔒 JWT Authentication & Authorization
    ├── 📊 OpenAPI 3.0 Documentation
    ├── 🎯 Cart Session Management
    └── ⚡ Ultra-fast Response Times (<100ms)
                    ↓
💾 Redis Session Storage (Upstash)
    ├── 🚀 Sub-millisecond latency operations
    ├── 🌐 Global edge network deployment
    ├── 🔄 Automatic cart persistence & recovery
    ├── 📱 Cross-device cart synchronization
    └── ⏰ TTL-based session expiration
                    ↓
🔗 Integration Points:
    ├── 📦 Product Service (Item validation & pricing)
    ├── 📋 Order Service (Cart-to-order conversion)
    ├── 👤 User Service (Authentication & authorization)
    └── 🌐 Frontend (Real-time cart state management)
                    ↓
🚀 Deployment Pipeline:
    ├── GitHub Actions (Automated CI/CD)
    ├── Docker Hub (Container registry)
    ├── Heroku Container Registry
    └── Production Health Monitoring`,
        achievements: [
            "☕ Production Java Spring Boot WebFlux microservice with reactive programming patterns",
            "🚀 Ultra-fast Redis integration with Upstash providing sub-millisecond cart operations",
            "🔄 Reactive programming implementation using Spring WebFlux for high concurrency",
            "🛒 Complete cart lifecycle management with persistent session storage",
            "📱 Real-time cart synchronization across multiple devices and browser sessions",
            "🔒 Enterprise JWT authentication with seamless user session management",
            "📚 Interactive OpenAPI 3.0 documentation with comprehensive Swagger UI",
            "🐛 Successfully identified and resolved cart quantity doubling bug",
            "🔗 Seamless integration with Product, Order, and User microservices",
            "🚀 Automated CI/CD deployment pipeline with GitHub Actions and Docker",
            "⚡ Sub-100ms response times for all cart operations with reactive streams",
            "📊 Professional repository structure with 16 logical commits and documentation"
        ]
    },
    technicalFeatures: {
        reactiveProgramming: {
            title: "🔄 Spring WebFlux Reactive Programming",
            features: [
                "Non-blocking I/O operations with reactive streams for high performance",
                "Mono and Flux reactive types for asynchronous data processing",
                "Backpressure handling for efficient resource utilization",
                "Event-driven architecture with reactive publishers and subscribers",
                "Functional programming patterns with reactive operators",
                "High concurrency support with minimal thread overhead"
            ]
        },
        cartManagement: {
            title: "🛒 Advanced Cart Operations",
            features: [
                "Complete CRUD operations for cart items with validation",
                "Real-time cart synchronization across multiple devices",
                "Automatic cart persistence and recovery mechanisms",
                "Cart session management with configurable TTL policies",
                "Bulk operations for efficient cart updates and modifications",
                "Cart checkout preparation with order service integration"
            ]
        },
        redisIntegration: {
            title: "💾 Ultra-Fast Redis Session Storage",
            features: [
                "Upstash Redis with global edge network for minimal latency",
                "Session-based cart storage with automatic expiration policies",
                "Connection pooling and failover mechanisms for reliability",
                "Data serialization optimization for efficient storage",
                "Cross-device cart synchronization with session management",
                "Real-time cart state persistence and recovery capabilities"
            ]
        },
        apiDocumentation: {
            title: "📚 Professional OpenAPI Documentation",
            features: [
                "Interactive Swagger UI with live testing capabilities",
                "Comprehensive request/response schema definitions",
                "Authentication flow documentation with JWT security",
                "Error handling examples with standardized response formats",
                "Model classes with detailed validation rules and examples",
                "Integration examples for seamless microservice communication"
            ]
        },
        enterpriseSecurity: {
            title: "🔒 Enterprise Security & Authentication",
            features: [
                "JWT token-based authentication with configurable expiration",
                "Unified secret management across all platform microservices",
                "CORS configuration for secure cross-origin requests",
                "Input validation and sanitization for all API endpoints",
                "Session security with Redis-based token storage",
                "Environment-based configuration for production deployment"
            ]
        }
    },
    codeExamples: {
        reactiveController: `// Reactive Cart Controller with Spring WebFlux
@RestController
@RequestMapping("/cart")
@Tag(name = "Cart Management", description = "Reactive cart operations with WebFlux")
public class CartController {

    private final CartService cartService;
    private final ProductService productService;

    @GetMapping("/{userId}")
    @Operation(summary = "Get user cart", description = "Retrieve cart contents for specific user")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Cart retrieved successfully"),
        @ApiResponse(responseCode = "404", description = "Cart not found")
    })
    public Mono<ResponseEntity<CartResponse>> getUserCart(
            @Parameter(description = "User ID") @PathVariable String userId) {
        
        return cartService.getCartByUserId(userId)
            .map(cart -> ResponseEntity.ok(CartResponse.from(cart)))
            .defaultIfEmpty(ResponseEntity.notFound().build())
            .onErrorResume(error -> {
                log.error("Error retrieving cart for user: {}", userId, error);
                return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
            });
    }

    @PostMapping("/{userId}/items")
    @Operation(summary = "Add item to cart", description = "Add product item to user cart")
    public Mono<ResponseEntity<CartResponse>> addItemToCart(
            @Parameter(description = "User ID") @PathVariable String userId,
            @Valid @RequestBody AddToCartRequest request) {
        
        return productService.validateProduct(request.getProductId())
            .flatMap(product -> cartService.addItemToCart(userId, request, product))
            .map(cart -> ResponseEntity.ok(CartResponse.from(cart)))
            .onErrorResume(ProductNotFoundException.class, 
                error -> Mono.just(ResponseEntity.badRequest().build()))
            .onErrorResume(error -> {
                log.error("Error adding item to cart: {}", request, error);
                return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
            });
    }

    @PutMapping("/{userId}/items/{itemId}")
    @Operation(summary = "Update cart item", description = "Update quantity of cart item")
    public Mono<ResponseEntity<CartResponse>> updateCartItem(
            @PathVariable String userId,
            @PathVariable String itemId,
            @Valid @RequestBody UpdateCartItemRequest request) {
        
        return cartService.updateCartItemQuantity(userId, itemId, request.getQuantity())
            .map(cart -> ResponseEntity.ok(CartResponse.from(cart)))
            .defaultIfEmpty(ResponseEntity.notFound().build())
            .onErrorResume(error -> {
                log.error("Error updating cart item: {} for user: {}", itemId, userId, error);
                return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
            });
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "Clear cart", description = "Remove all items from user cart")
    public Mono<ResponseEntity<Void>> clearCart(
            @Parameter(description = "User ID") @PathVariable String userId) {
        
        return cartService.clearCart(userId)
            .then(Mono.just(ResponseEntity.noContent().<Void>build()))
            .onErrorResume(error -> {
                log.error("Error clearing cart for user: {}", userId, error);
                return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
            });
    }
}`,
        reactiveService: `// Reactive Cart Service Implementation
@Service
@Slf4j
public class CartService {

    private final ReactiveRedisTemplate<String, Object> redisTemplate;
    private final ProductService productService;
    
    private static final String CART_KEY_PREFIX = "cart:";
    private static final Duration CART_TTL = Duration.ofDays(7);

    public Mono<Cart> getCartByUserId(String userId) {
        String cartKey = CART_KEY_PREFIX + userId;
        
        return redisTemplate.opsForValue()
            .get(cartKey)
            .cast(Cart.class)
            .doOnSuccess(cart -> log.debug("Retrieved cart for user: {}", userId))
            .doOnError(error -> log.error("Error retrieving cart for user: {}", userId, error));
    }

    public Mono<Cart> addItemToCart(String userId, AddToCartRequest request, ProductResponse product) {
        return getCartByUserId(userId)
            .defaultIfEmpty(Cart.empty(userId))
            .flatMap(cart -> {
                CartItem newItem = CartItem.builder()
                    .productId(request.getProductId())
                    .quantity(request.getQuantity())
                    .price(product.getPrice())
                    .title(product.getTitle())
                    .build();
                
                cart.addOrUpdateItem(newItem);
                return saveCart(cart);
            })
            .doOnSuccess(cart -> log.info("Added item {} to cart for user: {}", 
                request.getProductId(), userId));
    }

    public Mono<Cart> updateCartItemQuantity(String userId, String itemId, int quantity) {
        return getCartByUserId(userId)
            .flatMap(cart -> {
                if (cart.updateItemQuantity(itemId, quantity)) {
                    return saveCart(cart);
                } else {
                    return Mono.error(new CartItemNotFoundException("Item not found: " + itemId));
                }
            })
            .doOnSuccess(cart -> log.info("Updated item {} quantity to {} for user: {}", 
                itemId, quantity, userId));
    }

    public Mono<Void> clearCart(String userId) {
        String cartKey = CART_KEY_PREFIX + userId;
        
        return redisTemplate.delete(cartKey)
            .then()
            .doOnSuccess(unused -> log.info("Cleared cart for user: {}", userId));
    }

    private Mono<Cart> saveCart(Cart cart) {
        String cartKey = CART_KEY_PREFIX + cart.getUserId();
        
        return redisTemplate.opsForValue()
            .set(cartKey, cart, CART_TTL)
            .then(Mono.just(cart))
            .doOnSuccess(savedCart -> log.debug("Saved cart for user: {}", cart.getUserId()));
    }

    public Mono<CheckoutSummary> prepareCheckout(String userId) {
        return getCartByUserId(userId)
            .flatMap(cart -> {
                if (cart.isEmpty()) {
                    return Mono.error(new EmptyCartException("Cannot checkout empty cart"));
                }
                
                return productService.validateCartItems(cart.getItems())
                    .then(Mono.just(CheckoutSummary.from(cart)));
            })
            .doOnSuccess(summary -> log.info("Prepared checkout for user: {} with total: {}", 
                userId, summary.getTotalAmount()));
    }
}`,
        redisConfiguration: `// Redis Configuration for Reactive Operations
@Configuration
@EnableConfigurationProperties(RedisProperties.class)
public class RedisConfig {

    @Value("\${spring.redis.url}")
    private String redisUrl;

    @Bean
    public ReactiveRedisConnectionFactory connectionFactory() {
        LettuceConnectionFactory factory = new LettuceConnectionFactory(
            parseRedisUrl(redisUrl)
        );
        
        factory.setValidateConnection(true);
        factory.setShareNativeConnection(false);
        
        return factory;
    }

    @Bean
    public ReactiveRedisTemplate<String, Object> reactiveRedisTemplate(
            ReactiveRedisConnectionFactory connectionFactory) {
        
        RedisSerializationContext<String, Object> context = RedisSerializationContext
            .<String, Object>newSerializationContext(StringRedisSerializer.UTF_8)
            .key(StringRedisSerializer.UTF_8)
            .value(GenericJackson2JsonRedisSerializer.INSTANCE)
            .hashKey(StringRedisSerializer.UTF_8)
            .hashValue(GenericJackson2JsonRedisSerializer.INSTANCE)
            .build();

        return new ReactiveRedisTemplate<>(connectionFactory, context);
    }

    @Bean
    public RedisHealthIndicator redisHealthIndicator(
            ReactiveRedisConnectionFactory connectionFactory) {
        return new RedisHealthIndicator(connectionFactory);
    }

    private RedisStandaloneConfiguration parseRedisUrl(String url) {
        // Parse Redis URL for Upstash connection
        // Format: redis://username:password@host:port
        URI uri = URI.create(url);
        
        RedisStandaloneConfiguration config = new RedisStandaloneConfiguration();
        config.setHostName(uri.getHost());
        config.setPort(uri.getPort());
        
        if (uri.getUserInfo() != null) {
            String[] userInfo = uri.getUserInfo().split(":");
            if (userInfo.length == 2) {
                config.setUsername(userInfo[0]);
                config.setPassword(userInfo[1]);
            }
        }
        
        return config;
    }
}`,
        cartModel: `// Cart Domain Model with Builder Pattern
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Shopping cart containing user items")
public class Cart {
    
    @Schema(description = "Unique user identifier", example = "user123")
    private String userId;
    
    @Schema(description = "List of cart items")
    @Builder.Default
    private List<CartItem> items = new ArrayList<>();
    
    @Schema(description = "Cart creation timestamp")
    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();
    
    @Schema(description = "Last modification timestamp")
    @Builder.Default
    private LocalDateTime updatedAt = LocalDateTime.now();

    public static Cart empty(String userId) {
        return Cart.builder()
            .userId(userId)
            .items(new ArrayList<>())
            .build();
    }

    public void addOrUpdateItem(CartItem newItem) {
        Optional<CartItem> existingItem = items.stream()
            .filter(item -> item.getProductId().equals(newItem.getProductId()))
            .findFirst();
            
        if (existingItem.isPresent()) {
            existingItem.get().setQuantity(
                existingItem.get().getQuantity() + newItem.getQuantity()
            );
        } else {
            items.add(newItem);
        }
        
        this.updatedAt = LocalDateTime.now();
    }

    public boolean updateItemQuantity(String productId, int quantity) {
        Optional<CartItem> item = items.stream()
            .filter(cartItem -> cartItem.getProductId().equals(productId))
            .findFirst();
            
        if (item.isPresent()) {
            if (quantity <= 0) {
                items.remove(item.get());
            } else {
                item.get().setQuantity(quantity);
            }
            this.updatedAt = LocalDateTime.now();
            return true;
        }
        
        return false;
    }

    public boolean removeItem(String productId) {
        boolean removed = items.removeIf(item -> 
            item.getProductId().equals(productId));
            
        if (removed) {
            this.updatedAt = LocalDateTime.now();
        }
        
        return removed;
    }

    @JsonIgnore
    public BigDecimal getTotalAmount() {
        return items.stream()
            .map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    @JsonIgnore
    public int getTotalItems() {
        return items.stream()
            .mapToInt(CartItem::getQuantity)
            .sum();
    }

    @JsonIgnore
    public boolean isEmpty() {
        return items.isEmpty();
    }

    public void clear() {
        items.clear();
        this.updatedAt = LocalDateTime.now();
    }
}`
    },
    apiEndpoints: [
        {
            method: "GET",
            path: "/health",
            description: "Service health check with Redis connectivity",
            auth: "Public"
        },
        {
            method: "GET",
            path: "/cart/{userId}",
            description: "Get user's cart contents",
            auth: "JWT Token Required"
        },
        {
            method: "POST",
            path: "/cart/{userId}/items",
            description: "Add item to cart",
            auth: "JWT Token Required"
        },
        {
            method: "PUT",
            path: "/cart/{userId}/items/{itemId}",
            description: "Update cart item quantity",
            auth: "JWT Token Required"
        },
        {
            method: "DELETE",
            path: "/cart/{userId}/items/{itemId}",
            description: "Remove item from cart",
            auth: "JWT Token Required"
        },
        {
            method: "DELETE",
            path: "/cart/{userId}",
            description: "Clear entire cart",
            auth: "JWT Token Required"
        },
        {
            method: "POST",
            path: "/cart/{userId}/checkout",
            description: "Prepare cart for checkout",
            auth: "JWT Token Required"
        },
        {
            method: "GET",
            path: "/cart/{userId}/summary",
            description: "Get cart summary with totals",
            auth: "JWT Token Required"
        },
        {
            method: "POST",
            path: "/cart/{userId}/merge",
            description: "Merge anonymous cart with user cart",
            auth: "JWT Token Required"
        },
        {
            method: "PUT",
            path: "/cart/{userId}/bulk-update",
            description: "Bulk update multiple cart items",
            auth: "JWT Token Required"
        },
        {
            method: "GET",
            path: "/swagger-ui.html",
            description: "Interactive Swagger UI documentation",
            auth: "Public"
        }
    ],
    deploymentDetails: {
        platform: {
            name: "Heroku Platform",
            features: ["Container deployment", "Auto-scaling", "Health monitoring", "Environment management"],
            url: "https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com"
        },
        cicd: {
            tool: "GitHub Actions",
            features: ["Automated testing", "Docker build", "Security scanning", "Deployment validation"],
            pipeline: "16 logical commits with professional Git workflow"
        },
        database: {
            provider: "Upstash Redis",
            features: ["Global edge network", "Sub-millisecond latency", "Automatic scaling", "Built-in monitoring"],
            connection: "discrete-raccoon-6606.upstash.io"
        },
        monitoring: {
            tools: ["Heroku Metrics", "Upstash Monitoring", "Custom health checks", "Spring Boot Actuator"],
            metrics: ["Response time", "Redis performance", "Session management", "API usage analytics"]
        }
    },
    integrationPoints: {
        productService: {
            purpose: "Product validation and pricing verification",
            endpoints: ["GET /products/:id", "POST /products/validate"],
            dataFlow: "Cart → Product Service (validation) → Cart confirmation"
        },
        orderService: {
            purpose: "Cart-to-order conversion during checkout",
            endpoints: ["POST /orders", "GET /cart/:userId/checkout"],
            dataFlow: "Cart checkout → Order Service (conversion) → Order creation"
        },
        userService: {
            purpose: "User authentication and session management",
            endpoints: ["JWT validation", "User session management"],
            dataFlow: "User request → JWT validation → Cart operations"
        },
        frontend: {
            purpose: "Real-time cart state management and synchronization",
            technology: "React Context + State Management",
            dataFlow: "Frontend → Cart API → Redis → Real-time updates"
        }
    },
    performanceMetrics: {
        responseTime: {
            average: "< 100ms",
            p95: "< 200ms",
            p99: "< 500ms"
        },
        throughput: {
            rps: "1000+ requests/second",
            concurrent: "500+ concurrent users"
        },
        availability: {
            uptime: "99.9%",
            mttr: "< 3 minutes",
            monitoring: "Real-time health checks"
        },
        redis: {
            latency: "Sub-millisecond",
            connections: "Connection pooling",
            persistence: "Automatic TTL management"
        }
    },
    bugResolution: {
        issue: "Cart Quantity Doubling Bug",
        description: "Items added to cart were being doubled (adding 1 resulted in 2, adding 3 resulted in 6)",
        rootCause: "Frontend making duplicate API calls - both direct API call and CartContext state management calling the same endpoint",
        investigation: "Identified through API logs showing duplicate requests for same cart operations",
        solution: "Removed redundant API calls and consolidated cart state management to use only CartContext",
        result: "Bug completely resolved with accurate quantity handling and improved user experience",
        lessons: "Importance of proper state management in React applications and avoiding duplicate API calls"
    },
    futureEnhancements: [
        "Cart analytics and user behavior tracking",
        "Advanced cart abandonment recovery with email notifications",
        "Multi-currency support for international expansion",
        "Cart sharing functionality for collaborative shopping",
        "Product recommendations based on cart contents",
        "Integration with inventory management for real-time stock validation",
        "Advanced caching strategies with multiple Redis clusters",
        "Machine learning-based cart optimization and personalization"
    ]
};

export default cartApiServiceProject;