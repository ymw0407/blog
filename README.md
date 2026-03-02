# blog-content (운영 콘텐츠 Repo)

이 저장소는 실제 운영 콘텐츠를 보관합니다.

## 디렉토리 구조

```
posts/
  dev/
  travel/
  photo/
gallery/
albums/
portfolio/
```

## 글(frontmatter)

- `title`
- `date` (YYYY-MM-DD)
- `category` (dev/travel/photo)
- `tags` (array)
- `summary`
- `draft` (optional)

## CI (Repo A 트리거)

push/이슈/댓글 이벤트 발생 시 `repository_dispatch`로 Repo A(`blog-web`) 빌드를 트리거합니다.

### 필요한 설정 (Repo B)

- Variables
  - `WEB_REPO`: `owner/blog-web`
- Secrets
  - `REPO_DISPATCH_TOKEN`: Repo A에 `repository_dispatch`를 보낼 수 있는 토큰(최소 권한)
