export default {
    name: 'projets',
    type: 'document', 
    title: 'Projets', 
    fields: [
        {
            name: 'name', 
            type: 'string', 
            title: 'Name of Project', 
        }, 
        {
            name: "img",
            title: "Image of Project",
            type: "image",
            options: {
              hotspot: true // Optional: This allows for image cropping
            }  
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories of Project',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags' 
            }
        }
    ]
};
