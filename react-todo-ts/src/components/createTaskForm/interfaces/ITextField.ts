// ITextField
import { IDisabled } from '@/components/createTaskForm/interfaces/IDisabled';
import { ChangeEvent } from 'react';

export interface ITextField extends IDisabled {
    onChange?: (e: ChangeEvent<ElementInputType>) => void;
}

export type ElementInputType =
    | HTMLInputElement
    | HTMLTextAreaElement;
