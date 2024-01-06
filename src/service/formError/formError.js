export class validatorService {
  static min(value,min) {
    return value.length <= min && `veiller ecrire plus de ${min} lettre(s)`;
  }
  static max(value,max) {
    return value.length >= max && `veiller ecrire moin de ${max} lettre(s)`;
  }
}
