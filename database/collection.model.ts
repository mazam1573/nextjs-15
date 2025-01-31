import { Schema, Types, model, models } from 'mongoose';

export interface ICollection {
    author: Types.ObjectId,
    question: Types.ObjectId,
}

const CollectionSchema = new Schema<ICollection>({
    author: { type: Schema.Types.ObjectId, ref: "User" },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
}, { timestamps: true });

const Collection = models?.Collection || model<ICollection>('Collection', CollectionSchema);

export default Collection;