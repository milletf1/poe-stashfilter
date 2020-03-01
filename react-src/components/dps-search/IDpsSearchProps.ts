import * as React from 'react';

export default interface IDpsSearchProps {
  physicalDpsMin: string;
  physicalDpsMax: string;
  elementalDpsMin: string;
  elementalDpsMax: string;
  totalDpsMin: string;
  totalDpsMax: string;
  onPhysicalDpsMinChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onPhysicalDpsMaxChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onElementalDpsMinChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onElementalDpsMaxChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onTotalDpsMinChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onTotalDpsMaxChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
