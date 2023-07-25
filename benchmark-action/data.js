window.BENCHMARK_DATA = {
  "lastUpdate": 1690258789092,
  "repoUrl": "https://github.com/jamrok/rust-practical-networked-applications",
  "entries": {
    "Rust Key/Value Storage Engine Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "3874968+jamrok@users.noreply.github.com",
            "name": "jamrok",
            "username": "jamrok"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "640ffeaf0dcbfa6609346362f115364207a5c377",
          "message": "Project 3: Completed (#5)",
          "timestamp": "2023-07-24T23:15:17-05:00",
          "tree_id": "c0ade517c13e438ae9ca11736e3410b7fb7d2e89",
          "url": "https://github.com/jamrok/rust-practical-networked-applications/commit/640ffeaf0dcbfa6609346362f115364207a5c377"
        },
        "date": 1690258788335,
        "tool": "cargo",
        "benches": [
          {
            "name": "engines/write/kvs",
            "value": 177547061,
            "range": "± 41666528",
            "unit": "ns/iter"
          },
          {
            "name": "engines/write/sled",
            "value": 1611287,
            "range": "± 12489",
            "unit": "ns/iter"
          },
          {
            "name": "engines/read/kvs",
            "value": 5995879,
            "range": "± 43961",
            "unit": "ns/iter"
          },
          {
            "name": "engines/read/sled",
            "value": 1908957,
            "range": "± 15317",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}