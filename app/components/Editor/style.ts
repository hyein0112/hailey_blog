import styled from "@emotion/styled";

export const EditorContainer = styled.div`
  width: 100%;
  height: 80%;

  .w-md-editor {
    height: 100% !important;
    resize: none !important;
    background-color: ${({ theme }) => theme.colors.background2};
  }
  .wmde-markdown {
    background-color: ${({ theme }) => theme.colors.background2};
  }
  .w-md-editor-toolbar {
    padding: 8px !important;
    background-color: ${({ theme }) => theme.colors.background2};
  }
  .w-md-editor-toolbar ul {
    display: flex;
    align-items: center;
  }
  .w-md-editor-toolbar button {
    display: flex;
    align-items: center;
    padding: 0 8px !important;
  }

  .w-md-editor-text {
    height: 100%;
    padding: 7px;
    & div,
    & pre {
      height: 100%;

      & span {
        font-size: medium;
      }
    }
  }

  .w-md-editor-text-input {
    position: absolute;
    font-size: medium;
    line-height: 19px;
    height: 5000px;
    overflow: visible;
    padding-bottom: 0;
  }
  .w-md-editor-bar {
    display: none;
  }
`;
