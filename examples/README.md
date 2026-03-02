# Examples

이 폴더의 예시는 **인덱싱되지 않습니다**. (빌드는 `posts/`만 스캔)

원하면 아래처럼 복사해서 실제 콘텐츠로 사용하세요:

- `examples/posts/<category>/*.json` → `posts/<category>/`

그 다음 Repo A에서:

```bash
pnpm -C blog-web run index-content
pnpm -C blog-web dev
```

