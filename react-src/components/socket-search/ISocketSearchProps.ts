
import * as React from 'react';

export default interface ISocketSearchProps {
  socketsMin: string;
  socketsMax: string;
  redSockets: string;
  greenSockets: string;
  blueSockets: string;
  whiteSockets: string;
  abyssSockets: string;
  onSocketsMinChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onSocketsMaxChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onRedSocketChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onBlueSocketChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onGreenSocketChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onWhiteSocketChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onAbyssSocketChange:
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
