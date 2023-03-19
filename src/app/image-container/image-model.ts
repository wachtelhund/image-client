export class ImageModel {
  id: number;
  description: string;
  imageUrl: string | undefined;
  location: string | undefined;
  constructor(id: number, imageUrl: string, description: string, location: string) {
    this.id = id;
    this.description = description;
    this.imageUrl = imageUrl;
    this.location = location;
  }
}