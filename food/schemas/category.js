export default {
    name: 'category',
    type: 'document',
    title: 'category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'category name',
        validation: rule =>rule.required() 
      },
      {
        name: 'description',
        type: 'string',
        title: 'category description',
        validation: rule =>rule.required() 
      },
      {
        name: 'image',
        type: 'image',
        title: 'image of the category',
        validation: rule =>rule.required() 
      }
    ]
  }