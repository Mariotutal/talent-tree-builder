/**
 * Retrieves the index of the previous node in a sequence of nodes.
 * @param index - The current index.
 * @param talentsNumber - The total number of talents.
 * @returns The index of the previous node, or null if the current index is the first node.
 */
export const getPreviousNodeIndex = (index: number, talentsNumber: number): number | null => {
  return index % talentsNumber !== 0 ? index - 1 : null;
};

/**
 * Retrieves the index of the next node in a sequence of nodes based on a given group size.
 * @param index - The current index.
 * @param talentsNumber - The total number of talents.
 * @returns The index of the next node, or null if the current index is the last node in its group.
 */
export const getNextNodeIndex = (index: number, talentsNumber: number): number | null => {
  return index % talentsNumber !== (talentsNumber - 1) ? index + 1 : null;
};

/**
 * Deselects a node at a given index from the array of previously selected nodes,
 * ensuring that the next node is not deselected if it's already selected.
 * @param prevSelectedNodes - Array of previously selected node indices.
 * @param index - The index of the node to deselect.
 * @param talentsNumber - The total number of talents.
 * @returns The updated array of selected node indices after potential deselection.
 */
export const deselectNode = (prevSelectedNodes: number[], index: number, talentsNumber:number): number[] => {
  const nextNodeIndex = getNextNodeIndex(index, talentsNumber);
  if (nextNodeIndex !== null && prevSelectedNodes.includes(nextNodeIndex)) {
    return prevSelectedNodes; 
  }
  return prevSelectedNodes.filter(nodeIndex => nodeIndex !== index);
};

/**
 * Selects a node at a given index if the prerequisite (previous node being selected)
 * is met and the maximum points constraint is not exceeded.
 * @param prevSelectedNodes - Array of previously selected node indices.
 * @param index - The index of the node to select.
 * @param maxPoints - Maximum number of points allowed to be selected.
 * @param talentsNumber - The total number of talents.
 * @returns The updated array of selected node indices after potential selection.
 */
export const selectNode = (prevSelectedNodes: number[], index: number, maxPoints: number,  talentsNumber:number): number[] => {
  const previousNodeIndex = getPreviousNodeIndex(index, talentsNumber);
  if (previousNodeIndex !== null && !prevSelectedNodes.includes(previousNodeIndex)) {
    return prevSelectedNodes;
  }
  if (prevSelectedNodes.length < maxPoints && !prevSelectedNodes.includes(index)) {
    return [...prevSelectedNodes, index];
  }
  return prevSelectedNodes;
};
