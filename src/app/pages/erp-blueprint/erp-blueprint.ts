import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-erp-blueprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './erp-blueprint.html',
  styleUrl: '../../../assets/scss/erp-blueprint/erp-blueprint.scss',
})
export class ErpBlueprint implements AfterViewInit, OnDestroy {
  activeTab: string = 'domain';
  charts: any[] = [];
  treeData: any;
  activeTreeFilter: string = 'all';

  constructor() {
    this.initTreeData();
  }

  ngAfterViewInit() {
    this.initCharts();
  }

  ngOnDestroy() {
    this.charts.forEach(chart => chart.destroy());
  }

  switchTab(tabId: string) {
    this.activeTab = tabId;
  }

  private initTreeData() {
    const C = {
      domain: '#534AB7', app: '#185FA5', infra: '#0F6E56',
      api: '#993C1D', tests: '#854F0B', shared: '#5F5E5A',
      product: '#7c3aed', order: '#0f6e56', user: '#185fa5',
      inv: '#854f0b', invoice: '#993c1d',
      cs: '#378ADD', file: '#888780'
    };

    const f = (name: string, detail: string = '', color: string = C.cs) => ({ type: 'file', name, detail, color });
    const d = (name: string, color: string, badge: string | null, children: any[], detail: string = '') => ({
      type: 'dir', name, color, badge, children, detail, open: true, visible: true
    });

    this.treeData = d('ERP.Solution/', C.shared, 'solution', [
      d('src/', C.shared, null, [

        d('ERP.Domain/', C.domain, 'Domain', [
          d('Common/', C.shared, null, [
            f('BaseEntity.cs', 'Id, CreatedAt, UpdatedAt', C.domain),
            f('AuditableEntity.cs', '+ CreatedBy, ModifiedBy', C.domain),
          ]),
          d('Interfaces/', C.shared, null, [
            f('IRepository.cs', 'Generic<T> CRUD contract', C.domain),
            f('IUnitOfWork.cs', 'SaveChangesAsync()', C.domain),
          ]),

          d('Product/', C.product, 'module', [
            d('Entities/', C.shared, null, [
              f('Product.cs', 'Id, Name, SKU, Price, CategoryId', C.domain),
              f('Category.cs', 'Id, Name, ParentCategoryId', C.domain),
            ]),
            d('Interfaces/', C.shared, null, [
              f('IProductRepository.cs', 'GetBySku, GetByCategory', C.domain),
            ]),
            d('Events/', C.shared, null, [
              f('ProductCreatedEvent.cs', '', C.domain),
              f('ProductPriceChangedEvent.cs', '', C.domain),
            ]),
            d('Specifications/', C.shared, null, [
              f('ActiveProductsSpec.cs', 'IsActive == true', C.domain),
              f('ProductByCategorySpec.cs', '', C.domain),
            ]),
          ]),

          d('Order/', C.order, 'module', [
            d('Entities/', C.shared, null, [
              f('Order.cs', 'Id, OrderNo, CustomerId, Status, Total', C.domain),
              f('OrderItem.cs', 'OrderId, ProductId, Qty, UnitPrice', C.domain),
            ]),
            d('Enums/', C.shared, null, [
              f('OrderStatus.cs', 'Pending, Confirmed, Shipped, Cancelled', C.domain),
            ]),
            d('Interfaces/', C.shared, null, [
              f('IOrderRepository.cs', 'GetByCustomer, GetByStatus', C.domain),
            ]),
            d('Events/', C.shared, null, [
              f('OrderPlacedEvent.cs', '', C.domain),
              f('OrderShippedEvent.cs', '', C.domain),
            ]),
          ]),

          d('User/', C.user, 'module', [
            d('Entities/', C.shared, null, [
              f('AppUser.cs', 'Id, Name, Email, PasswordHash, RoleId', C.domain),
            ]),
            d('Enums/', C.shared, null, [
              f('UserRole.cs', 'Admin, Manager, Staff, Viewer', C.domain),
            ]),
            d('Interfaces/', C.shared, null, [
              f('IUserRepository.cs', 'FindByEmail, GetById', C.domain),
              f('ITokenService.cs', 'GenerateToken, ValidateToken', C.domain),
            ]),
          ]),
        ]),

        d('ERP.Application/', C.app, 'Application', [
          d('Common/', C.shared, null, [
            d('Behaviours/', C.shared, null, [
              f('ValidationBehaviour.cs', 'Auto-validates all commands', C.app),
              f('LoggingBehaviour.cs', 'Logs every request/response', C.app),
              f('PerformanceBehaviour.cs', 'Warns if > 500ms', C.app),
            ]),
            d('Exceptions/', C.shared, null, [
              f('NotFoundException.cs', '404 — resource not found', C.app),
              f('ValidationException.cs', '400 — input invalid', C.app),
              f('UnauthorizedException.cs', '401 — not allowed', C.app),
            ]),
            d('Mappings/', C.shared, null, [
              f('AutoMapperProfile.cs', 'Global AutoMapper config', C.app),
            ]),
          ]),

          d('Features/', C.app, null, [

            d('Product/', C.product, 'module', [
              d('Commands/', C.shared, null, [
                f('CreateProductCommand.cs', '', C.app),
                f('UpdateProductCommand.cs', '', C.app),
                f('DeleteProductCommand.cs', '', C.app),
              ]),
              d('Queries/', C.shared, null, [
                f('GetProductByIdQuery.cs', '', C.app),
                f('GetAllProductsQuery.cs', 'Paginated list', C.app),
                f('SearchProductsQuery.cs', 'Filter by name/SKU/category', C.app),
              ]),
              d('DTOs/', C.shared, null, [
                f('ProductRequestDto.cs', 'Name, SKU, Price, CategoryId', C.app),
                f('ProductResponseDto.cs', 'All fields + CategoryName', C.app),
                f('ProductListDto.cs', 'Minimal fields for listing', C.app),
              ]),
              d('Validators/', C.shared, null, [
                f('CreateProductValidator.cs', 'FluentValidation rules', C.app),
                f('UpdateProductValidator.cs', '', C.app),
              ]),
              d('Handlers/', C.shared, null, [
                f('CreateProductHandler.cs', 'IRequestHandler impl', C.app),
                f('UpdateProductHandler.cs', '', C.app),
                f('DeleteProductHandler.cs', '', C.app),
                f('GetProductHandler.cs', '', C.app),
                f('SearchProductsHandler.cs', '', C.app),
              ]),
              d('Mappings/', C.shared, null, [
                f('ProductMappingProfile.cs', 'Entity ↔ DTO maps', C.app),
              ]),
            ]),

            d('Order/', C.order, 'module', [
              d('Commands/', C.shared, null, [
                f('PlaceOrderCommand.cs', '', C.app),
                f('CancelOrderCommand.cs', '', C.app),
                f('UpdateOrderStatusCommand.cs', '', C.app),
              ]),
              d('Queries/', C.shared, null, [
                f('GetOrderByIdQuery.cs', '', C.app),
                f('GetOrdersByCustomerQuery.cs', '', C.app),
              ]),
              d('DTOs/', C.shared, null, [
                f('PlaceOrderDto.cs', 'CustomerId, Items[]', C.app),
                f('OrderResponseDto.cs', 'Full order + items', C.app),
                f('OrderItemDto.cs', 'ProductId, Qty, Price', C.app),
              ]),
              d('Validators/', C.shared, null, [
                f('PlaceOrderValidator.cs', 'Min 1 item, valid product', C.app),
              ]),
              d('Handlers/', C.shared, null, [
                f('PlaceOrderHandler.cs', '', C.app),
                f('CancelOrderHandler.cs', '', C.app),
                f('GetOrderHandler.cs', '', C.app),
              ]),
            ]),

            d('User/', C.user, 'module', [
              d('Commands/', C.shared, null, [
                f('RegisterUserCommand.cs', '', C.app),
                f('LoginCommand.cs', 'Returns JWT token', C.app),
                f('UpdateProfileCommand.cs', '', C.app),
                f('ChangePasswordCommand.cs', '', C.app),
              ]),
              d('Queries/', C.shared, null, [
                f('GetUserByIdQuery.cs', '', C.app),
                f('GetAllUsersQuery.cs', 'Admin only', C.app),
              ]),
              d('DTOs/', C.shared, null, [
                f('RegisterDto.cs', 'Name, Email, Password', C.app),
                f('LoginDto.cs', 'Email, Password', C.app),
                f('AuthResponseDto.cs', 'Token, Expiry, UserInfo', C.app),
              ]),
              d('Validators/', C.shared, null, [
                f('RegisterValidator.cs', 'Email unique, password min 8', C.app),
                f('LoginValidator.cs', '', C.app),
              ]),
              d('Handlers/', C.shared, null, [
                f('RegisterHandler.cs', '', C.app),
                f('LoginHandler.cs', '', C.app),
                f('GetUserHandler.cs', '', C.app),
              ]),
            ]),

          ]),
        ]),

        d('ERP.Infrastructure/', C.infra, 'Infrastructure', [
          d('Persistence/', C.shared, null, [
            f('ApplicationDbContext.cs', 'DbContext — all DbSets', C.infra),
            d('Configurations/', C.shared, null, [
              f('ProductConfiguration.cs', 'EF table + column config', C.infra),
              f('CategoryConfiguration.cs', '', C.infra),
              f('OrderConfiguration.cs', 'One-to-many: Order → Items', C.infra),
              f('OrderItemConfiguration.cs', '', C.infra),
              f('UserConfiguration.cs', 'Unique index on Email', C.infra),
            ]),
            d('Migrations/', C.shared, null, [
              f('20240101_InitialCreate.cs', 'Auto-generated', C.shared),
              f('20240215_AddOrderStatus.cs', 'Auto-generated', C.shared),
            ]),
          ]),

          d('Repositories/', C.shared, null, [
            f('GenericRepository.cs', 'BaseRepo<T> impl', C.infra),
            d('Product/', C.product, 'module', [
              f('ProductRepository.cs', 'implements IProductRepository', C.infra),
            ]),
            d('Order/', C.order, 'module', [
              f('OrderRepository.cs', 'GetByCustomerAsync etc.', C.infra),
            ]),
            d('User/', C.user, 'module', [
              f('UserRepository.cs', 'FindByEmailAsync', C.infra),
            ]),
          ]),

          d('Identity/', C.shared, null, [
            f('JwtService.cs', 'implements ITokenService', C.infra),
            f('PasswordHasher.cs', 'BCrypt wrapper', C.infra),
          ]),

          d('UnitOfWork/', C.shared, null, [
            f('UnitOfWork.cs', 'implements IUnitOfWork', C.infra),
          ]),

          d('ExternalServices/', C.shared, null, [
            f('EmailService.cs', 'SMTP / SendGrid', C.infra),
            f('PdfService.cs', 'Generate invoice PDFs', C.infra),
            f('FileStorageService.cs', 'Azure Blob / S3', C.infra),
          ]),

          f('DependencyInjection.cs', 'services.AddInfrastructure()', C.infra),
        ]),

        d('ERP.API/', C.api, 'API', [
          d('Controllers/', C.shared, null, [
            d('Product/', C.product, 'module', [
              f('ProductController.cs', 'GET /products  POST  PUT  DELETE', C.api),
            ]),
            d('Order/', C.order, 'module', [
              f('OrderController.cs', 'POST /orders  GET /{id}  PATCH status', C.api),
            ]),
            d('User/', C.user, 'module', [
              f('AuthController.cs', 'POST /auth/register  /login  /refresh', C.api),
              f('UserController.cs', 'GET /users  GET /users/{id}', C.api),
            ]),
          ]),

          d('Middleware/', C.shared, null, [
            f('ExceptionMiddleware.cs', 'Global error handler → ProblemDetails', C.api),
            f('RequestLoggingMiddleware.cs', 'Structured request logs', C.api),
          ]),

          d('Filters/', C.shared, null, [
            f('AuthorizationFilter.cs', 'Role-based access check', C.api),
            f('ValidationFilter.cs', 'Model state → 400 response', C.api),
          ]),

          d('Extensions/', C.shared, null, [
            f('ServiceCollectionExtensions.cs', 'AddApplication + AddInfra', C.api),
            f('SwaggerExtensions.cs', 'JWT auth in Swagger UI', C.api),
            f('HealthCheckExtensions.cs', 'DB + external services', C.api),
          ]),

          d('Configurations/', C.shared, null, [
            f('appsettings.json', 'ConnectionString, JWT config', C.shared),
            f('appsettings.Development.json', 'Dev overrides', C.shared),
            f('appsettings.Production.json', 'Prod secrets (env vars)', C.shared),
          ]),

          f('Program.cs', 'Entry point — pipeline + DI setup', C.api),
        ]),

        d('ERP.Tests/', C.tests, 'Tests', [
          d('UnitTests/', C.shared, null, [
            d('Product/', C.product, 'module', [
              f('CreateProductHandlerTests.cs', '', C.tests),
              f('ProductValidatorTests.cs', '', C.tests),
            ]),
            d('Order/', C.order, 'module', [
              f('PlaceOrderHandlerTests.cs', '', C.tests),
              f('OrderValidatorTests.cs', '', C.tests),
            ]),
            d('User/', C.user, 'module', [
              f('LoginHandlerTests.cs', '', C.tests),
              f('JwtServiceTests.cs', '', C.tests),
            ]),
          ]),
          d('IntegrationTests/', C.shared, null, [
            d('Product/', C.product, 'module', [
              f('ProductRepositoryTests.cs', 'InMemory EF DB', C.tests),
              f('ProductApiTests.cs', 'WebApplicationFactory', C.tests),
            ]),
            d('Order/', C.order, 'module', [
              f('OrderRepositoryTests.cs', '', C.tests),
              f('OrderApiTests.cs', '', C.tests),
            ]),
          ]),
          d('TestHelpers/', C.shared, null, [
            f('MockFactory.cs', 'Fake repos + services', C.tests),
            f('TestBase.cs', 'Base class, InMemory DB setup', C.tests),
            f('SeedData.cs', 'Sample Products, Orders, Users', C.tests),
          ]),
        ]),

      ]),

      f('ERP.Solution.sln', 'Visual Studio solution file', C.shared),
      f('docker-compose.yml', 'App + DB + Redis containers', C.shared),
      f('README.md', 'Project overview + setup guide', C.shared),
      f('.gitignore', '', C.shared),
    ]);
  }

  toggleFolder(node: any) {
    node.open = !node.open;
  }

  setAllFolders(open: boolean) {
    const traverse = (node: any) => {
      if (node.type === 'dir') {
        node.open = open;
        node.children.forEach(traverse);
      }
    };
    traverse(this.treeData);
  }

  expandTree(type: string) {
    this.activeTreeFilter = type;
    if (type === 'all') {
      this.setAllFolders(true);
      this.resetVisibility(this.treeData);
      return;
    }
    if (type === 'collapse') {
      this.setAllFolders(false);
      return;
    }

    this.setAllFolders(false);
    const MODULE_NAMES: any = {
      product: ['Product/', 'ProductController', 'ProductRepository', 'ProductService', 'ProductHandler', 'ProductValidator', 'ProductMapping', 'ProductDto', 'ProductConfiguration', 'ProductTests', 'ProductSpec', 'ProductEvent', 'ProductCreated', 'ProductPrice', 'CreateProduct', 'UpdateProduct', 'DeleteProduct', 'GetProduct', 'SearchProduct'],
      order: ['Order/', 'OrderController', 'OrderRepository', 'OrderItem', 'OrderService', 'OrderHandler', 'OrderValidator', 'PlaceOrder', 'CancelOrder', 'OrderStatus', 'OrderMapping', 'OrderDto', 'OrderConfiguration', 'OrderTests', 'OrderEvent', 'OrderShipped', 'OrderPlaced', 'GetOrder'],
      user: ['User/', 'AuthController', 'UserController', 'UserRepository', 'JwtService', 'LoginHandler', 'RegisterHandler', 'LoginCommand', 'RegisterCommand', 'AuthResponse', 'UserProfile', 'LoginDto', 'RegisterDto', 'LoginValidator', 'RegisterValidator', 'UserTests', 'AppUser', 'UserRole', 'UserHandler', 'ChangePassword', 'UpdateProfile', 'GetUser', 'GetAllUsers'],
    };

    const keywords = MODULE_NAMES[type] || [];
    const traverse = (node: any): boolean => {
      let hasMatch = keywords.some((k: string) => node.name.includes(k)) ||
        ['Common', 'src/', 'ERP.', 'Behaviours', 'Exceptions', 'Mappings', 'Migrations', 'Persistence', 'UnitOfWork', 'DependencyInjection', 'Helpers', 'TestHelpers', 'Extensions', 'Middleware', 'appsettings', 'Program', 'Features/', 'Configurations/', 'Controllers/', 'Repositories/', 'Identity', 'UnitTests', 'IntegrationTests'].some(k => node.name.includes(k));

      if (node.type === 'dir') {
        let childMatch = false;
        node.children.forEach((c: any) => {
          if (traverse(c)) childMatch = true;
        });
        if (childMatch) {
          node.open = true;
          hasMatch = true;
        }
      }
      node.visible = hasMatch;
      return hasMatch;
    };

    traverse(this.treeData);
  }

  private resetVisibility(node: any) {
    node.visible = true;
    if (node.type === 'dir') {
      node.children.forEach((c: any) => this.resetVisibility(c));
    }
  }

  highlightStep(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement;
    const allSteps = document.querySelectorAll('.flow-step');

    allSteps.forEach((s: any) => s.style.opacity = '0.45');
    el.style.opacity = '1';

    setTimeout(() => {
      allSteps.forEach((s: any) => s.style.opacity = '1');
    }, 1800);
  }

  private initCharts() {
    // Bar chart
    const barCtx = document.getElementById('barChart') as HTMLCanvasElement;
    if (barCtx) {
      const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Domain', 'Application', 'Infrastructure', 'API', 'Tests'],
          datasets: [{
            label: 'Files',
            data: [12, 18, 14, 10, 8],
            backgroundColor: [
              'rgba(99, 102, 241, 0.7)',  // Primary (Indigo)
              'rgba(168, 85, 247, 0.7)',  // Secondary (Purple)
              'rgba(16, 185, 129, 0.7)',  // Success (Emerald)
              'rgba(244, 63, 94, 0.7)',   // Accent (Rose)
              'rgba(245, 158, 11, 0.7)'   // Warning (Amber)
            ],
            borderColor: ['#6366f1', '#a855f7', '#10b981', '#f43f5e', '#f59e0b'],
            borderWidth: 1,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#f8fafc',
              bodyColor: '#f8fafc',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255, 255, 255, 0.05)' },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255, 255, 255, 0.05)' },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            }
          }
        }
      });
      this.charts.push(barChart);
    }

    // Doughnut chart
    const doughnutCtx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    if (doughnutCtx) {
      const doughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Business Logic', 'App Logic', 'Technical', 'API Delivery', 'Tests'],
          datasets: [{
            data: [35, 25, 20, 12, 8],
            backgroundColor: [
              'rgba(99, 102, 241, 0.8)',
              'rgba(168, 85, 247, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(244, 63, 94, 0.8)',
              'rgba(245, 158, 11, 0.8)'
            ],
            borderColor: ['#6366f1', '#a855f7', '#10b981', '#f43f5e', '#f59e0b'],
            borderWidth: 1,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 12, padding: 10 }
            },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              padding: 12,
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1
            }
          }
        }
      });
      this.charts.push(doughnutChart);
    }
  }
}
