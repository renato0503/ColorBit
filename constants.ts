import { JourneyStep, Differential, Pillar } from './types';

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    title: "Inspiração e Briefing",
    shortDesc: "Onde tudo começa.",
    fullDesc: {
      action: "O cliente envia fotos do ambiente, referências e objetivos visuais.",
      result: "Nossa equipe entende a função do espaço e as restrições orçamentárias para alinhar expectativas."
    },
    iconName: 'lightbulb'
  },
  {
    id: 2,
    title: "Consultoria ColorBit",
    shortDesc: "Design e Técnica.",
    fullDesc: {
      action: "Entrega de paletas de cor otimizadas (Design) e especificação técnica da tinta via relatório digital.",
      result: "Cliente aprova a cor e o material com segurança técnica."
    },
    iconName: 'palette'
  },
  {
    id: 3,
    title: "Curadoria de Mão de Obra",
    shortDesc: "O Match Perfeito.",
    fullDesc: {
      action: "Indicamos pintores parceiros qualificados especificamente para o tipo de projeto.",
      result: "O cliente recebe 2-3 orçamentos confiáveis e agenda a execução sem dores de cabeça."
    },
    iconName: 'users'
  },
  {
    id: 4,
    title: "Fornecimento e Logística",
    shortDesc: "Gestão de Materiais.",
    fullDesc: {
      action: "A ColorBit gerencia a compra e a entrega dos materiais (tintas, ferramentas) no prazo.",
      result: "Evitamos atrasos na obra e desperdícios de material."
    },
    iconName: 'truck'
  },
  {
    id: 5,
    title: "Execução e Entrega",
    shortDesc: "Transformação Real.",
    fullDesc: {
      action: "O projeto é finalizado pela equipe indicada e supervisionada.",
      result: "O cliente desfruta de um ambiente transformado, com a cor precisa e acabamento garantido."
    },
    iconName: 'paint-bucket'
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Visão Holística",
    description: "Integração total entre design, técnica e execução.",
    iconName: "eye"
  },
  {
    title: "Otimização de Custos",
    description: "Redução de desperdício e assertividade na compra.",
    iconName: "trending-down"
  },
  {
    title: "Foco na Precisão",
    description: "A cor escolhida é exatamente a cor aplicada.",
    iconName: "crosshair"
  },
  {
    title: "Confiança na Execução",
    description: "Profissionais curados e validados.",
    iconName: "shield-check"
  }
];

export const PILLARS: Pillar[] = [
  {
    title: "Consultoria",
    description: "Orientação técnica e estética para evitar escolhas incorretas.",
    iconName: "message-circle"
  },
  {
    title: "Curadoria de Mão de Obra",
    description: "Seleção rigorosa de profissionais para garantir qualidade.",
    iconName: "user-check"
  },
  {
    title: "Fornecimento/Execução",
    description: "Logística de materiais eficiente e acompanhamento da obra.",
    iconName: "package-check"
  }
];