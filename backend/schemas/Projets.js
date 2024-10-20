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
        }
    ]
};
