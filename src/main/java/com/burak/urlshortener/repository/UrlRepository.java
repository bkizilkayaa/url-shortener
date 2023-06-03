package com.burak.urlshortener.repository;

import com.burak.urlshortener.model.Url;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UrlRepository extends JpaRepository<Url,Long> {
    @Query(value = "SELECT * FROM url WHERE short_link = :shortLink", nativeQuery = true)
    Url findByShortLink(String shortLink);
}
