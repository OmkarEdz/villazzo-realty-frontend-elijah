declare interface Property {
    id: number,
    attributes: {
      Content: string,
      createdAt: Date,
      updatedAt: Date,
      publishedAt: Date,
      title: string,
      location: string,
      slug:string ,
      ImageURL: string,
    }    
}