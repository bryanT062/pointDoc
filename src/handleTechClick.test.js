import { describe, it, expect, vi } from 'vitest';

describe('handleTechClick' , () => {
    it('affiche la tech PAR RAPPORT A LA TECH SELECTIONNÉ'), () => {
        const data =[
            { name: 'HTML' , description: 'Language HTML'},
            { name: 'CSS' , description: 'Feuilles de style'},
        ];
        const techName = 'CSS';

        const setSelectedTech = vi.fn();
        const onTechClick = vi.fn();

        const handleTechClick = (techName) => {
      const tech = data.find((t) => t.name.toLowerCase() === techName.toLowerCase());
      setSelectedTech(tech);
      onTechClick(techName);
    };

    
    handleTechClick(techName);

    expect(setSelectedTech).toHaveBeenCalledWith({ name: 'CSS', description: 'Feuilles de style' });
    expect(onTechClick).toHaveBeenCalledWith('css');
  });
});