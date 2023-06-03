package com.burak.urlshortener.repository;

import com.burak.urlshortener.model.Url;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;

public interface UrlRepository extends JpaRepository<Url,Long> {
    @Query(value = "SELECT * FROM url WHERE short_url = :shortLink AND expire_date > :currentDate ORDER BY expire_date ASC LIMIT 1", nativeQuery = true)
    Url findByShortLink(String shortLink, LocalDateTime currentDate);
}
