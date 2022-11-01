const notion = new Client({ auth: process.env.NOTION_SECRET });

if (!notion) {
  throw new Error('Notion blew up');
}

export async function queryNotionDatabase(databaseId) {
  if (!databaseId) {
    throw new Error('Notion database ID is required');
  }
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
}

export const getPortfolio = queryNotionDatabase(
  process.env.NOTION_PORTFOLIO_DATABASE
);

export async function listNotionBlockChildren(blockId) {
  const content = await notion.blocks.children.list({
    block_id: blockId,
  });
  return content.results;
}

export const getProjects = Promise.allSettled(
  getPortfolio.map(async (project) => {
    const blockChildren = listNotionBlockChildren(project.id);
    return { ...project, blockChildren };
  })
);
