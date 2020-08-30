import CustomValidationException from '../exceptions/CustomValidationException';

const Validation = (JoiSchema: any) => (
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>,
): any => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [req, res] = args;
    try {
      const { body } = req;
      const validated = JoiSchema.validate(body);

      if (!validated.error) {
        originalMethod(...args);
      } else {
        throw new CustomValidationException(
          'Erro de validação',
          validated.error.details,
        );
      }
    } catch (e) {
      res.handleHttpError(e);
    }
  };
};

export default Validation;
