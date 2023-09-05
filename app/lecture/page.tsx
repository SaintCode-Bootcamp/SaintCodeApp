'use client';
import Button from '../ui/Button/Button';

function lecture() {
  return (
    <div>
      <Button text="Понятно" wrongBtn />
    </div>
  );
}

export default lecture;

// function lecture({ posts }) {
//   return (
//     <div>
//       {posts.map((post) => (
//         <h2 key={post.id}>{post.title}</h2>
// <h2 key={post.id}>{post.lecture}</h2>;
//       ))}
//     </div>
//   );
// }
