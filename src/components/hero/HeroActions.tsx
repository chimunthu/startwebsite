import React from 'react';
import Button from '../ui/Button';

interface HeroActionsProps {
  primary: string;
  secondary: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroActions: React.FC<HeroActionsProps> = ({
  primary,
  secondary,
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button variant="primary" size="lg" onClick={onPrimaryClick}>
        {primary}
      </Button>
      <Button variant="secondary" size="lg" onClick={onSecondaryClick}>
        {secondary}
      </Button>
    </div>
  );
};

export default HeroActions;
