export class CreateProductDTO {
    readonly name: string;
    readonly imageURL: string;
    readonly desc: string;
    readonly price: number;
    readonly createdAt: Date;
}
