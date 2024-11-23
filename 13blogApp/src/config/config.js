const config = {
    appwirteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwirteProjectId : String(import.meta.env.VITE_PROJECT_ID),
    appwirteDatabaseId : String(import.meta.env.VITE_DATABASE_ID),
    appwirteCollectionID : String(import.meta.env.VITE_COLLECTION_ID),
    appwirteBucketId : String(import.meta.env.VITE_BUCKET_ID)
}

export default config