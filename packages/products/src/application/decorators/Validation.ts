import badRequest from '@/application/factories/http/badRequest';

const Validation = (JoiSchema: any) => (
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>,
): any => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [req, res] = args;
    const { body } = req;
    const validated = JoiSchema.validate(body);

    if (!validated.error) {
      originalMethod(...args);
    } else {
      const { details } = validated;

      const result = badRequest('erro de validação', details);
      res.status(400).send(result);
    }
  };
};

export default Validation;
