const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const parent = getNode(node.parent);

    createNodeField({
      name: "sourceInstanceName",
      node,
      value: parent.sourceInstanceName
    });
  }
};

exports.onCreateNode = onCreateNode;
