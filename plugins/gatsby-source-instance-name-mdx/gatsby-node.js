const onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

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
