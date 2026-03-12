import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  padding: 0.8rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <span className="a11y-hidden">로딩 중...</span>
    </LoadingWrapper>
  );
}
