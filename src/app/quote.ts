export class Quote {
    showDetails:boolean;
  constructor(
    public id: number,
    public quotename: string,
    public author: string,
    public person: string,
    public upvote: number,
    public downvote: number,
    public postDate: Date
  ) {
    this.showDetails = false;
  }
}
