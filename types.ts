export interface JourneyStep {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: {
    action: string;
    result: string;
  };
  iconName: 'lightbulb' | 'palette' | 'users' | 'truck' | 'paint-bucket';
}

export interface Differential {
  title: string;
  description: string;
  iconName: 'eye' | 'trending-down' | 'crosshair' | 'shield-check';
}

export interface Pillar {
  title: string;
  description: string;
  iconName: 'message-circle' | 'user-check' | 'package-check';
}