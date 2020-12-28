import casual from 'casual';

// TODO add your casual generator (https://github.com/boo1ean/casual)
casual.define('user', (id) => ({
  id: id || casual.uuid,
  name: casual.full_name,
  age: casual.integer(18, 99),
  createdAt: casual.date('YYYY-MM-DDTHH:mm:ssZ'),
}));
