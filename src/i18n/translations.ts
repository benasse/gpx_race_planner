import cs from './cs';
import sk from './sk';
import en from './en';
import fr from './fr';

export type Lang = 'cs' | 'sk' | 'en' | 'fr';

export const translations = { cs, sk, en, fr };

export type T = typeof cs;
