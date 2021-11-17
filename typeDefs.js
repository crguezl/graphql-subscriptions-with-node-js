//type definitions and schemas - (operation and data structure)
const typeDefs = `
    type Query {
        getPosts: [Post!]!
        getPost(query: String!): [Post]
    }

    type Post{
        id:ID
        title:String
        subtitle:String
        body:String
        published:Boolean
        author: String
        upvotes: Int
        downvotes: Int
        commentCount: Int
    }

    type Mutation{

        updatePost(
          id:ID!
          title:String!
          subtitle:String
          body:String!
          published:Boolean
          author: String!
          upvotes: Int
          downvotes: Int
          commentCount: Int
        ): Post!
        
        deletePost(id: ID!): Post!
        
        createPost(
          id:ID!
          title:String
          subtitle:String
          body:String
          published:Boolean
          author: String!
          upvotes: Int
          downvotes: Int
          commentCount: Int
        ): Post!
    }

    type Subscription {
        post: SubscriptionPayload
    }
    
    type SubscriptionPayload {
        mutation: String
        data: Post
    }
`;
module.exports = typeDefs;
