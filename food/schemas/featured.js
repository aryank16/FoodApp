export default {
    name: 'featured',
    type: 'document',
    title: 'Featured Restaurants',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurant name',
        validation: rule =>rule.required() 
      },
      {
        name: 'description',
        type: 'string',
        title: ' description',
        validation: rule =>rule.max(200) 
      },
      {
        name: 'restaurants',
        type: 'array',
        title: 'Restaurants',
        of: [{type: 'reference', to: [{type: 'resturant'}]}]
      },
    
    ]
  }