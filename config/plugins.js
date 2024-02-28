    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
      upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              ACL:  'public-read',
              // signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
              Bucket: env('AWS_BUCKET'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
      'publisher': {
        enabled: true,
        config: {
          hooks: {
            beforePublish: async ({ strapi, uid, entity }) => {
              console.log('beforePublish');
            },
            afterPublish: async ({ strapi, uid, entity }) => {
              console.log('afterPublish');
            },
            beforeUnpublish: async ({ strapi, uid, entity }) => {
              console.log('beforeUnpublish');
            },
            afterUnpublish: async ({ strapi, uid, entity }) => {
              console.log('afterUnpublish');
            },
          },
        },
      },
});