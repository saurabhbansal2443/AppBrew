import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const storeFrontAPIAccessToken = "2b9b949169cb4befad5b5e411719b447";
const apiKey = "2b9b949169cb4befad5b5e411719b447";
const apiSecretKey = "f8f6ac66ba2478f4988856026cdbd616";

const client = createStorefrontApiClient({
  storeDomain: "https://getkart007.myshopify.com",
  apiVersion: "2024-04",
  publicAccessToken: storeFrontAPIAccessToken,
});

const fetchProducts = async () => {
    const query = `
      {
        products(first: 100) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `;
  
    try {
      const response = await client.fetch({ query });
      
      // Log the entire response for debugging
      console.log("Response:", response);
  
      if (response.data && response.data.products) {
        const products = response.data.products.edges;
        console.log(products);
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      // Log the error details
      console.error("Error fetching products:", error);
      if (error.response) {
        const errorData = await error.response.json();
        console.error("Error details:", errorData);
      }
    }
  };
  
  // Call the function to fetch products
  fetchProducts();