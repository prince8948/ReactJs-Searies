import config from "../config/config";
import { Client, ID, Databases, Query, Storage } from "appwrite";

// create a class which contain all method and access these methods using object of this class
export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appwirteUrl)
            .setProject(config.appwirteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    //create methos to create post for user
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwirteDatabaseId,
                config.appwirteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    // update method which is used to update post of users
    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                config.appwirteDatabaseId,
                config.appwirteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error
        }
    }
    // is used to  delete user post which one he want to delete
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwirteDatabaseId,
                config.appwirteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: dalete Post", error)
            return false
        }
    }

// here is user see his single post 
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwirteDatabaseId,
                config.appwirteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: get Post", error)
            return false
        }
    }

//User getting listing  of his post which is he posted on my website
    async getAllPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwirteDatabaseId,
                config.appwirteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: get All Post", error)
            return false
        }
    }


    // File Upload File services
    async uploadFile() {
        try {
            return await this.bucket.createFile(
                config.appwirteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: upload File", error)
            return false
        }
    }

    // Delete File services we used delete img from post
    async deleteFile(fileID) {
        try {
            await this.this.bucket.deleteFile(
                config.appwirteBucketId,
                fileID,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: Delete File", error)
            return false
        }
    }

    // file preview  getting small preview how the imgs looks in post
    getPreview(fileID) {
        return this.bucket.getFilePreview(
            config.appwirteBucketId,
            fileID
        )
    }
}

//here export class object for better access or access through obj
const service = new Service();

export default service;







