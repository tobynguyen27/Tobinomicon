import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import {
    createFileSystemGeneratorCache,
    createGenerator,
    remarkAutoTypeTable,
} from "fumadocs-typescript";

const generator = createGenerator({
    cache: createFileSystemGeneratorCache(".next/fumadocs-typescript"),
});

export const docs = defineDocs({
    dir: "content/docs",
    docs: {
        schema: frontmatterSchema,
    },
    meta: {
        schema: metaSchema,
    },
});

export default defineConfig({
    mdxOptions: {
        remarkPlugins: [[remarkAutoTypeTable, { generator }]],
    },
    plugins: [lastModified()],
});
