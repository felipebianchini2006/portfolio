import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/projects';
import { SkillBadge } from '@/app/components/SkillBadge';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Projeto não encontrado',
    };
  }

  return {
    title: `${project.title} - Felipe Pacheco Bianchini`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 hover:gap-3"
        >
          <ArrowLeft size={20} />
          Voltar para projetos
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-secondary mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all hover:gap-3"
            >
              <Github size={20} />
              Ver no GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground rounded-lg font-medium hover:bg-primary hover:text-white transition-all border border-border"
              >
                <ExternalLink size={20} />
                Ver Demo
              </a>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Tecnologias Utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <SkillBadge key={tech} name={tech} variant="primary" />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-accent rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Sobre o Projeto
          </h2>
          <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </div>

        {/* Key Features or Additional Info */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Destaques do Projeto
          </h2>
          <div className="grid gap-4">
            {project.slug === 'granja-tech' && (
              <>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    🔌 Integração com IoT
                  </h3>
                  <p className="text-secondary">
                    Sistema conectado a sensores para monitoramento em tempo real
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    📊 Dashboards Visuais
                  </h3>
                  <p className="text-secondary">
                    Visualização clara de dados para tomada de decisão rápida
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    🐔 Gestão Completa
                  </h3>
                  <p className="text-secondary">
                    Controle de lotes, insumos, mortalidade e análise financeira
                  </p>
                </div>
              </>
            )}
            {project.slug === 'pedidos-online' && (
              <>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    🏗️ Arquitetura Moderna
                  </h3>
                  <p className="text-secondary">
                    Microserviços independentes para máxima escalabilidade
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    ⚡ Alta Performance
                  </h3>
                  <p className="text-secondary">
                    Sistema assíncrono com mensageria RabbitMQ para processamento rápido
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    🔐 API Gateway
                  </h3>
                  <p className="text-secondary">
                    Orquestração centralizada de serviços distribuídos
                  </p>
                </div>
              </>
            )}
            {project.slug === 'sistema-delivery' && (
              <>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    🛒 E-commerce Completo
                  </h3>
                  <p className="text-secondary">
                    Carrinho de compras, checkout e gestão de pedidos integrados
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    💳 Pagamentos Integrados
                  </h3>
                  <p className="text-secondary">
                    Integração com Mercado Pago para transações seguras
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    👨‍💼 Painel Administrativo
                  </h3>
                  <p className="text-secondary">
                    Gestão completa de produtos, categorias e pedidos
                  </p>
                </div>
              </>
            )}
            {project.slug === 'bibliotech' && (
              <>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    📚 Gestão de Acervo
                  </h3>
                  <p className="text-secondary">
                    Controle completo de livros, autores e categorias
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    🔄 Fluxo Automatizado
                  </h3>
                  <p className="text-secondary">
                    Sistema automático de empréstimos e devoluções
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    🔒 Segurança de Dados
                  </h3>
                  <p className="text-secondary">
                    Integridade e validações robustas em todas as operações
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-primary/10 rounded-xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Gostou do projeto?
          </h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Confira o código-fonte no GitHub ou entre em contato para saber mais sobre o desenvolvimento
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all"
            >
              <Github size={20} />
              Acessar Repositório
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground rounded-lg font-medium hover:bg-primary hover:text-white transition-all border border-border"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
