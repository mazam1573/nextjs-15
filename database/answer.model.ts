import { Schema, Types, model, models } from 'mongoose';

export interface IAnswer {
    author: Types.ObjectId,
    question: Types.ObjectId,
    content: string,
    upvotes: number,
    downvotes: number,
}

const AnswerSchema = new Schema<IAnswer>({
    author: { type: Schema.Types.ObjectId, ref: "User" },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    content: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
}, { timestamps: true });

const Answer = models?.Question || model<IAnswer>('Question', AnswerSchema);

export default Answer;