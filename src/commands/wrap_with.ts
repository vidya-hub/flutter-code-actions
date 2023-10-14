import { wrapWith } from "../utils/wrapWith";

const scaffoldSnippet = (widget: string) => {
    return `Scaffold(body:${widget})`;
  };
  
const expandedSnippet = (widget:string)=>{
  return `Expanded(child:${widget})`;
}
const futureBuilderSnippet = (widget:string)=>{
  return `FutureBuilder(
    future: null,
    builder: (BuildContext context,AsyncSnapshot snapshot) {
      return ${widget};
    }
  )`;
}

export const wrapWithScaffold = async () => wrapWith(scaffoldSnippet);
export const wrapWithExpanded = async () => wrapWith(expandedSnippet);
export const wrapWithFutureBuilder = async () => wrapWith(futureBuilderSnippet);
