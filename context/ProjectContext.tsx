'use client';

import React, { createContext, useContext, useState } from 'react';
import { Project } from '@/types/project';

type ProjectContextType = {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  isDetailsVisible: boolean;
  setIsDetailsVisible: (visible: boolean) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <ProjectContext.Provider 
      value={{ 
        selectedProject, 
        setSelectedProject,
        isDetailsVisible,
        setIsDetailsVisible
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
} 